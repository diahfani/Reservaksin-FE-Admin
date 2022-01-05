import React from "react";
import ActionButton from "../../ActionButtonTable/ActionButton";
import '../Table.css';

function TableItemSession({ data }) {
  // let waktu = data.start + " -" + data.end;
  return (
    <tr className="table-data">
      <th scope="row">
        <input type="checkbox" onChange={() => {}} />
      </th>
      <td>{data.namaSesi}</td>
      <td>{data.tanggal}</td>
      <td>{data.start}</td>
      <td>{data.end}</td>
      <td>{data.lokasi.nama}</td>
      <td>{data.vaksin.nama}</td>
      <td>{data.kapasitas}</td>
      <td>{data.tahap}</td>
      <ActionButton edit="edit" delete="delete" />
    </tr>
  );
}

export default TableItemSession;