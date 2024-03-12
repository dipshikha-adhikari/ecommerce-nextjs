
export const signUp = async (data: any) => {
    const response = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message); // Throw error with the message from the server
    }

    return await response.json();
};
