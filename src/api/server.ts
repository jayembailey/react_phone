export const server_calls = {
    get: async () => {
        const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
        {
            method: 'GET',
            mode: "cors",
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    }

    //TODO: finish server calls
}