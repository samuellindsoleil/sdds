export default {
  title: 'Component/Tabs/Inline Tabs (full bleed)',
  parameters: {
    layout: 'fullpage',
  },
};

const Template = () => `
    <div class="sdds-inline-tabs-fullbleed sdds-inline-tabs-fullbleed__ongrey50">
      <a href="#" class="sdds-inline-tabs-fullbleed--tab">Tab name</a>
      <a href="#" class="sdds-inline-tabs-fullbleed--tab sdds-inline-tabs-fullbleed--tab__active">Selected tab name</a>
      <a href="#" class="sdds-inline-tabs-fullbleed--tab sdds-inline-tabs-fullbleed--tab__disabled">Disabled tab name</a>
      <a href="#" class="sdds-inline-tabs-fullbleed--tab">Tab name</a>

      <div class="sdds-inline-tabs-fullbleed-navigation">
        <button class="sdds-inline-tabs-fullbleed--forward sdds-inline-tabs-fullbleed--back__show">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.1147 17.3291C5.87062 17.0851 5.87062 16.6893 6.1147 16.4453L12.2948 10.2652C12.4412 10.1187 12.4412 9.8813 12.2948 9.73485L6.1147 3.55476C5.87062 3.31068 5.87062 2.91496 6.1147 2.67088C6.35878 2.4268 6.75451 2.4268 6.99858 2.67088L13.1787 8.85097C13.8133 9.48557 13.8133 10.5145 13.1787 11.1491L6.99858 17.3291C6.75451 17.5732 6.35878 17.5732 6.1147 17.3291Z" fill="#0D0F13"></path></svg>
        </button>
        <button class="sdds-inline-tabs-fullbleed--back sdds-inline-tabs-fullbleed--back__show">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8853 2.67085C14.1294 2.91493 14.1294 3.31066 13.8853 3.55473L7.70522 9.73482C7.55878 9.88127 7.55878 10.1187 7.70522 10.2652L13.8853 16.4452C14.1294 16.6893 14.1294 17.085 13.8853 17.3291C13.6412 17.5732 13.2455 17.5732 13.0014 17.3291L6.82134 11.149C6.18674 10.5144 6.18674 9.48554 6.82134 8.85094L13.0014 2.67085C13.2455 2.42677 13.6412 2.42677 13.8853 2.67085Z" fill="#0D0F13"></path></svg>
        </button>
      </div>
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

let DOMContentLoaded = false;
document.addEventListener('DOMContentLoaded', () => {
  if (DOMContentLoaded) {
    return;
  }
  DOMContentLoaded = true;

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
