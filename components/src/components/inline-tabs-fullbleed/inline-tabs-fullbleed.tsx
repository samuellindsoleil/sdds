import { Component, Host, State, Element, h } from '@stencil/core';

@Component({
  tag: 'sdds-inline-tabs-fullbleed',
  styleUrl: 'inline-tabs-fullbleed.scss',
  shadow: true,
})
export class InlineTabsFullbleed {
  @Element() host: HTMLElement;
  @State() tabs: Array<any> = []; // array with metadata for slotted children
  @State() showLeftScroll: boolean = false;
  @State() showRightScroll: boolean = false;

  navWrapperElement: HTMLElement = null; // reference to container with nav buttons
  componentWidth: number = 0; // visible width of this component
  buttonsWidth: number = 0; // total width of all nav items combined
  scrollWidth: number = 0; // total amount that is possible to scroll in the nav wrapper
  buttonWidth: number = 0; // current calculated width of the largest nav button

  componentDidLoad() {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const componentWidth = entry.contentRect.width;
        let buttonsWidth = 0;

        const navButtons = entry.target.querySelectorAll(
          '.sdds-inline-tabs-fullbleed--tab'
        );
        if (navButtons) {
          Array.from(navButtons).forEach((navButton: HTMLElement) => {
            buttonsWidth += navButton.clientWidth;
          });
        }

        this.componentWidth = componentWidth;
        this.buttonsWidth = buttonsWidth;
        this.scrollWidth = buttonsWidth - componentWidth;

        if (this.buttonsWidth > this.componentWidth) {
          this._evaluateScrollButtons();
        } else {
          this.showLeftScroll = false;
          this.showRightScroll = false;
        }
      }
    });

    resizeObserver.observe(this.navWrapperElement);

    this._calculateButtonWidth();
  }

  _calculateButtonWidth() {
    const navButtons = this.navWrapperElement.querySelectorAll(
      '.sdds-inline-tabs-fullbleed--tab'
    );
    let best = 0;
    Array.from(navButtons).forEach((navButton: HTMLElement) => {
      const width = navButton.clientWidth;

      if (navButton.clientWidth > best) {
        best = width;
      }
    });

    this.buttonWidth = best;
  }

  _scrollRight() {
    const scroll = this.navWrapperElement.scrollLeft;
    this.navWrapperElement.scrollLeft = scroll + this.buttonWidth;

    this._evaluateScrollButtons();
  }

  _scrollLeft() {
    const scroll = this.navWrapperElement.scrollLeft;
    this.navWrapperElement.scrollLeft = scroll - this.buttonWidth;

    this._evaluateScrollButtons();
  }

  _evaluateScrollButtons() {
    const scroll = this.navWrapperElement.scrollLeft;

    if (scroll >= this.scrollWidth) {
      this.showRightScroll = false;
    } else {
      this.showRightScroll = true;
    }

    if (scroll <= 0) {
      this.showLeftScroll = false;
    } else {
      this.showLeftScroll = true;
    }
  }

  render() {
    return (
      <Host>
        <div
          ref={(el) => (this.navWrapperElement = el as HTMLElement)}
          class="sdds-inline-tabs-fullbleed"
        >
          <slot />
        </div>
      </Host>
    );
  }
}
