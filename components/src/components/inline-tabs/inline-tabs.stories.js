export default {
  title: 'Component/Tabs/Inline Tabs',
  parameters: {
    layout: 'fullpage',
  },
};

const Template = () => `

    <style>
      /*Style just for demo*/
      #root {
        padding: 32px !important;
        background-color: #fff;
        height: 100vh;
      }
    </style>

    <div class="sdds-inline-tabs">
      <div class="sdds-inline-tabs-header">
        <a href="#" class="sdds-inline-tabs--tab">Tab name 1</a>
        <a href="#" class="sdds-inline-tabs--tab sdds-inline-tabs--tab__active">Tab name 2</a>
        <a href="#" class="sdds-inline-tabs--tab sdds-inline-tabs--tab__disabled">Disabled & long tab name 3</a>
        <a href="#" class="sdds-inline-tabs--tab">Tab name 4</a>
      </div>
      <div class="sdds-inline-tabs-main">
        <div class="sdds-inline-tabs-main--content">
          Content for tab 1<br>
          This tabs has a lot of content so this is the one that decides the height of the container.
          <br><br>
          Here is some more content.
          <br><br>
          And here is a little bit more.
        </div>
        <div class="sdds-inline-tabs-main--content sdds-inline-tabs-main--content__active">
          Content for tab 2<br>
          This is just a little content, but the size of the container is based to the tab with the most content.
          <br><br>
          This is broken until we have some fancy js to fix it.
        </div>
        <div class="sdds-inline-tabs-main--content">
          Content for tab 3<br>
          This tab is disabled, so you should not be able to see this content.
        </div>
        <div class="sdds-inline-tabs-main--content sdds-inline-tabs-main--content">
          Content for tab 4<br>
          here is some content...
        </div>
      </div>
    </div>
    `;

export const Basic = Template.bind({});

Basic.args = {};
