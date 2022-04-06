export default {
  title: 'Component/Tabs/Inline Tabs (full bleed)',
  parameters: {
    layout: 'fullpage',
  },
};

const Template = () => `

    <div class="sdds-inline-tabs-fullbleed">
      <a href="#" class="sdds-inline-tabs-fullbleed--tab">Tab name</a>
      <a href="#" class="sdds-inline-tabs-fullbleed--tab sdds-inline-tabs-fullbleed--tab__active">Selected tab name</a>
      <a href="#" class="sdds-inline-tabs-fullbleed--tab sdds-inline-tabs-fullbleed--tab__disabled">Disabled tab name</a>
      <a href="#" class="sdds-inline-tabs-fullbleed--tab">Tab name</a>
    </div>
    `;

export const Basic = Template.bind({});

Basic.args = {};
