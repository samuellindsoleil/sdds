export default {
  title: 'Component/Table',
};

export const WebComponent = () => ` 
      <sdds-table 
      table-title="Hello table 2">
          <sdds-table-head column-key="eyeColor" column-title="Header1"></sdds-table-head>
          <sdds-table-head column-key="name" column-title="Header2"></sdds-table-head>
          <sdds-table-head column-key="gender" column-title="Header3"></sdds-table-head>
          <sdds-table-head column-key="company" column-title="Header4"></sdds-table-head>              
      </sdds-table>
    `;
