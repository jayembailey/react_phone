const token = 'b916a74cc4c5b5504d8705ed29f2583091842613896febac'

export const server_calls = {
    get: async () => {
        console.log('meow meow meow')
        const response = await fetch(`http://127.0.0.1:5000/api/contacts`,
        {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`, 
            },
        })

        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/contacts`,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }
        return await response.json()
    },

    update: async (id:string, data: any= {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/contacts/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`,
            },
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to update data on server')
        }
        return await response.json()
    },
    delete: async (id:string, data: any= {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/contacts/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
        })
        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }
        return;
    },
}