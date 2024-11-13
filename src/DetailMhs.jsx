import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetailMhs() {
	// Mengambil nim dari URL params
	const { nim } = useParams();
	const [mahasiswa, setMahasiswa] = useState([]);
	const [krs, setKrs] = useState([]);
	const [ips, setIps] = useState("-");
	// Initialize state for the selected semester
	const [selectedSemester, setSelectedSemester] = useState("");

	// Handle change event when a new semester is selected
	const handleSemesterChange = (event) => {
		setSelectedSemester(event.target.value); // Update state with the selected value
	};

	function calculateIPS(filteredKrsMhs) {
		// Sum up SKS * Nilai for each mata kuliah
		let totalBobot = 0;
		let totalSks = 0;

		filteredKrsMhs.forEach((mk) => {
			const bobot = mk.sks * mk.bobot; // SKS * Nilai for each course
			totalBobot += bobot;
			totalSks += mk.sks; // Sum of SKS
		});

		// Calculate IPS
		const IPS = totalBobot / totalSks;

		// Return the result, rounded to two decimal places
		return IPS.toFixed(2);
	}

	useEffect(() => {
		fetch(
			`https://backend-ppl-production.up.railway.app/api/mahasiswa/krs/${nim}`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(
					data.filter(
						(filteredData) => filteredData.semesterKRS == selectedSemester
					)
				);

				setKrs(
					data.filter(
						(filteredData) => filteredData.semesterKRS == selectedSemester
					)
				);
			});
	}, [nim, selectedSemester]);

	useEffect(() => {
		if (krs != null) {
			setIps(calculateIPS(krs));
		}
	}, [krs, ips]);

	useEffect(() => {
		fetch(
			`https://backend-ppl-production.up.railway.app/api/mahasiswa/nim/${nim}`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMahasiswa(data);
			});
	}, [nim]);

	return (
		<>
			<div className="my-4 text-center">
				<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
					{mahasiswa.nama}
				</h1>
				<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
					{mahasiswa.nim}
				</p>

				<div class="inline-flex align-it rounded-md shadow-sm" role="group">
					<p class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
						IPS <br></br>
						{ips !== null && !isNaN(ips) ? ips : "-"}
					</p>

					<p class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
						IPK <br></br>
						{mahasiswa.cumulativeIPK}
					</p>
				</div>
			</div>

			<form className="max-w-sm mx-auto">
				<label
					htmlFor="semester"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Pilih Semester
				</label>
				<select
					id="semester"
					value={selectedSemester} // Set the value from the state
					onChange={handleSemesterChange} // Update the state when selection changes
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
					<option value="" disabled selected>
						Klik disini
					</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
				</select>
			</form>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								No
							</th>
							<th scope="col" className="px-6 py-3">
								kodeMK
							</th>
							<th scope="col" className="px-6 py-3">
								Mata Kuliah
							</th>
							<th scope="col" className="px-6 py-3">
								Semester
							</th>
							<th scope="col" className="px-6 py-3">
								SKS
							</th>
							<th scope="col" className="px-6 py-3">
								Nilai
							</th>
							<th scope="col" className="px-6 py-3">
								<span className="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{krs.map((krsMhs, idx) => {
							return (
								<tr
									key={krsMhs.kodeMk}
									className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
								>
									<td className="px-6 py-4">{idx + 1}</td>
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										{krsMhs.kodeMk}
									</th>
									<td className="px-6 py-4">{krsMhs.mataKuliah}</td>
									<td className="px-6 py-4">{krsMhs.semesterKRS}</td>
									<td className="px-6 py-4">{krsMhs.sks}</td>
									<td className="px-6 py-4">{krsMhs.nilai}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default DetailMhs;
