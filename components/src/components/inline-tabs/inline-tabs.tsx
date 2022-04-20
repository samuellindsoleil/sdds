import {
  Component,
  Host,
  State,
  Element,
  Prop,
  h,
  Method,
} from '@stencil/core';

@Component({
  tag: 'sdds-inline-tabs',
  styleUrl: 'inline-tabs.scss',
  shadow: true,
})
export class InlineTabs {
  @Element() host: HTMLElement;

  @Prop() defaultTab: string = '';

  @State() tabs: Array<any> = [];

  @Method()
  async showTab(key: string) {
    this.switchToTab(key);
  }

  startingTab: string = null;

  generateKeyFromName(name: string) {
    return name
      .replace(/\s/g, '-')
      .replace(/[^a-z0-9-]/gi, '')
      .toLowerCase();
  }

  initComponent(createInitialState = true) {
    this.tabs = [];

    Array.from(this.host.children).map((item: HTMLElement, index) => {
      let name = item.getAttribute('name') || 'Tab ' + (index + 1);

      let key = item.getAttribute('tab-key');
      if (!key) {
        key = this.generateKeyFromName(name);
      }

      if (item.getAttribute('default') !== null) {
        this.startingTab = key;
      }

      let disabled = false;
      if (item.getAttribute('disabled') !== null) {
        disabled = true;
      }

      this.tabs.push({
        name: name,
        key: key,
        element: item,
        disabled: disabled,
        visible: true,
        initialDisplay: window.getComputedStyle(item).display,
      });
    });

    createInitialState && this.setInitialState();
    this.tabs = Array.from(this.tabs);
  }

  componentWillLoad() {
    this.initComponent();
  }

  componentDidLoad() {
    const observer = new MutationObserver((/*mutations, observer*/) => {
      const visibleTab = this.tabs.find((tab) => tab.visible);
      this.initComponent(false);
      visibleTab && this.switchToTab(visibleTab.key);
    });

    observer.observe(this.host, {
      childList: true,
      attributes: true,
    });
  }

  setInitialState() {
    if (this.defaultTab) {
      this.startingTab = this.defaultTab;
    }

    this.tabs.map((tab, index) => {
      if (this.startingTab) {
        if (tab.key != this.startingTab) {
          this._hideTab(tab);
        }
      } else {
        if (index > 0) {
          this._hideTab(tab);
        }
      }
    });
  }

  _showTab(tab) {
    tab.element.style.display = '';
    tab.visible = true;
  }

  _hideTab(tab) {
    tab.element.style.display = 'none';
    tab.visible = false;
  }

  switchToTab(key: string) {
    this.tabs.map((tab) => {
      if (tab.key == key) {
        this._showTab(tab);
      } else {
        this._hideTab(tab);
      }
    });

    this.tabs = Array.from(this.tabs);
  }

  render() {
    return (
      <Host>
        <div class="sdds-inline-tabs">
          <nav class="sdds-inline-tabs-header">
            {this.tabs.map((tab) => {
              return (
                <button
                  disabled={tab.disabled}
                  class={
                    'sdds-inline-tabs--tab ' +
                    (tab.visible ? 'sdds-inline-tabs--tab__active' : '')
                  }
                  onClick={() => this.switchToTab(tab.key)}
                >
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
          <div class="sdds-inline-tabs-main">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
