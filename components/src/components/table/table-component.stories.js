export default {
  title: 'Component/Table',
};

export const WebComponent = () => ` 
      <sdds-table 
        table-title="Hello table 2"
        body-data=${`[{"eyeColor":"green","name":"Blanca_Sexton","gender":"female","company":"BIOSPAN"},{"eyeColor":"brown","name":"Kaye_Guerra","gender":"female","company":"COMCUBINE"},{"eyeColor":"blue","name":"Rhea_Serrano","gender":"female","company":"PIGZART"},{"eyeColor":"brown","name":"Bishop_Perkins","gender":"male","company":"FLYBOYZ"},{"eyeColor":"blue","name":"Rivas_Thomas","gender":"male","company":"DRAGBOT"}]`}
        >
          <sdds-table-head column-key="eyeColor" column-title="Header1"></sdds-table-head>
          <sdds-table-head column-key="name" column-title="Header2"></sdds-table-head>
          <sdds-table-head column-key="gender" column-title="Header3"></sdds-table-head>
          <sdds-table-head column-key="company" column-title="Header4"></sdds-table-head>              
      </sdds-table>
    `;
