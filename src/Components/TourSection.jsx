
export const TourSection = () => {
    return (
        <div className="bg-[url('/images/Tour-Background.jpeg')] w-full h-screen bg-cover bg-no-repeat flex justify-center items-center flex-col text-white">
            <div className="flex flex-col gap-10 w-3/5">
                <h1 className="text-9xl font-bebas">Tour Dates</h1>
                <div className="text-2xl w-full bg-slate-700 p-10 rounded">
                    {/* <table className="table-fixed w-full">
                        <tr>
                            <th className="w-1/4">Date</th>
                            <th>Venue</th>
                            <th>State</th>
                            <th>Tickets</th>
                        </tr>
                        <tr>
                            <td>10/5/2024</td>
                            <td>Hops Festival Yakima</td>
                            <td>Wahington</td>
                            <td>Tickets</td>
                        </tr>
                    </table> */}

                    <table className="table-fixed">
                        <thead>
                            <tr className="text-4xl">
                                <th className="w-1/3 text-left py-4">Date</th>
                                <th className="w-1/3 text-left py-4">Venue</th>
                                <th className="w-1/4 text-left y-4">State</th>
                                <th className="w-1/3 text-left y-4">Tickets</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-left py-2">09/21/2024</td>
                                <td className="text-left py-2">Blue Moon Tavern</td>
                                <td className="text-left py-2">Washington</td>
                                <td className="text-left py-2">$10 Cash</td>
                            </tr>
                            <tr>
                                <td className="text-left py-2">10/5/2024</td>
                                <td className="text-left py-2">Hops Festival Yakima</td>
                                <td className="text-left py-2">Washington</td>
                                <td className="text-left py-2 text-blue-300"><a href="https://freshhopalefestival.com/">Website</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};