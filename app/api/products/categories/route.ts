import { NextResponse } from "next/server";
import { QueryResult } from "pg";
const pool = require('@/lib/db')

export async function GET(
    req: Request,
) {

    try {
        const query = `
 WITH RECURSIVE category_tree AS (
  SELECT id, name, parent_id
  FROM categories
  WHERE parent_id IS NULL

  UNION ALL

  SELECT c.id, c.name, c.parent_id
  FROM categories c
  JOIN category_tree ct ON c.parent_id = ct.id
)
SELECT c.id AS parent_id,
       c.name AS parent_name,
       COALESCE(json_agg(sub), '[]'::json) AS childrens
FROM category_tree c
LEFT JOIN LATERAL (
  SELECT sub.id, sub.name, COALESCE(json_agg(grandchild), '[]'::json) AS childrens
  FROM categories sub
  LEFT JOIN LATERAL (
    SELECT grandchild.id, grandchild.name
    FROM categories grandchild
    WHERE grandchild.parent_id = sub.id
  ) AS grandchild ON true
  WHERE sub.parent_id = c.id
  GROUP BY sub.id, sub.name
) AS sub ON true
LEFT JOIN LATERAL (
  SELECT COUNT(*) > 0 AS has_children
  FROM categories sub2
  WHERE sub2.parent_id = c.id
) AS has_children ON true
WHERE c.parent_id IS NULL
GROUP BY c.id, c.name
HAVING json_agg(sub) IS NOT NULL;

`
        const result: QueryResult = await pool.query(query);
        return NextResponse.json(result.rows, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'Failed' }, { status: 400 });
    }
}

