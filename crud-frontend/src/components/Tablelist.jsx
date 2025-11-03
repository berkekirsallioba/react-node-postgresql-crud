export default function Tablelist() {

    const clients = [
        { "id": 1, "name": "Alice Johnson", "email": "alice.johnson@example.com", "job": "Software Engineer", "rate": "120.00", "isActive": true },

        { "id": 2, "name": "Bob Smith", "email": "bob.smith@example.com", "job": "Product Manager", "rate": "150.00", "isActive": true },

        { "id": 3, "name": "Charlie Davis", "email": "charlie.davis@example.com", "job": "Designer", "rate": "90.00", "isActive": true },

        { "id": 4, "name": "Dana Lee", "email": "dana.lee@example.com", "job": "Data Analyst", "rate": "110.00", "isActive": false },

        { "id": 5, "name": "Eve Martin", "email": "eve.martin@example.com", "job": "HR Specialist", "rate": "100.00", "isActive": true }
    ]

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>JOB</th>
                            <th>RATE</th>
                            <th>ISACTIVE</th>
                        </tr>
                    </thead>
                    <tbody >
                        {clients.map((client) => (
                            <tr className="hover:bg-base-300"  > 
                                <td>{client.id}</td>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.job}</td>
                                <td>{client.rate}</td>
                                <td>{client.isActive}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}