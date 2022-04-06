export default {
  title: 'Component/Tabs/Navigation Tabs',
  parameters: {
    layout: 'fullpage',
  },
};

const Template = () => `
    <div class="sdds-navigation-tabs">
      <a href="#" class="sdds-navigation-tabs--tab">Tab name</a>
      <a href="#" class="sdds-navigation-tabs--tab sdds-navigation-tabs--tab__active">Tab name</a>
      <a href="#" class="sdds-navigation-tabs--tab sdds-navigation-tabs--tab__disabled">Tab name</a>
      <a href="#" class="sdds-navigation-tabs--tab">Longer tab name</a>
    </div>
    `;

export const Basic = Template.bind({});

Basic.args = {};
