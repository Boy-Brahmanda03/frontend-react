import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
	const [mahasiswa, setMahasiswa] = useState([]);
	useEffect(() => {
		fetch("https://backend-ppl-production.up.railway.app/api/mahasiswa")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				// console.log(data);
				setMahasiswa(data);
			});
	}, []);

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							No
						</th>
						<th scope="col" className="px-6 py-3">
							Nama
						</th>
						<th scope="col" className="px-6 py-3">
							NIM
						</th>
						<th scope="col" className="px-6 py-3">
							<span className="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{mahasiswa.map((mhs, idx) => {
						return (
							<tr
								key={mhs.nim}
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
							>
								<td className="px-6 py-4">{idx + 1}</td>
								<td className="px-6 py-4">{mhs.nama}</td>
								<td className="px-6 py-4">{mhs.nim}</td>
								<td className="px-6 py-4 text-right">
									<Link
										to={`/detail/${mhs.nim}`}
										className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
									>
										Detail
									</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Home;
