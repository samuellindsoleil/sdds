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

const AlbinTemplate = () => `

    <sdds-inline-tabs-fullbleed id="inline-tabs-fullbleed-example">
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
      <a href="#">Tab name</a>
    </sdds-inline-tabs-fullbleed>    
    `;

let sddsInlineTabsFullbleedDOMContentLoaded = false;
document.addEventListener('DOMContentLoaded', () => {
  if (sddsInlineTabsFullbleedDOMContentLoaded) {
    return;
  }
  sddsInlineTabsFullbleedDOMContentLoaded = true;

  const links = document.querySelectorAll('#inline-tabs-fullbleed-example a');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      console.log('clicked link!');
      e.preventDefault();
      console.log(e.target);
      e.target.classList.toggle('sdds-inline-tabs-fullbleed--tab__active');
    });
  });
});

export const Albin = AlbinTemplate.bind({});
