"use client"
import { useEffect } from 'react';

function TableSearch() {
  useEffect(() => {
    const searchInput = document.getElementById('searchInput');
    const table = document.getElementById('dataTable');

    const handleSearch = () => {
      const query = searchInput.value.toLowerCase();
      const rows = table.querySelectorAll('tbody tr');

      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(query)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    };

    searchInput.addEventListener('input', handleSearch);

    return () => {
      searchInput.removeEventListener('input', handleSearch);
    };
  }, []);

  return (
    <div>
      <input id="searchInput" type="text" placeholder="Search" />
      <table id="dataTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
          </tr>
          {/* ... more rows ... */}
        </tbody>
      </table>
    </div>
  );
}

export default TableSearch;
