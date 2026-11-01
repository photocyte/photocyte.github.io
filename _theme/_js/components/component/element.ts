import { LitElement } from "lit";
import { Subject } from "rxjs";

export class RxLitElement extends LitElement {
  $connected = new Subject<boolean>();

  connectedCallback() { 
    super.connectedCallback();
    this.$connected.next(true);
  }

  disconnectedCallback() { 
    super.disconnectedCallback();
    this.$connected.next(false);
  }

  #firstUpdate!: boolean;

  $: any = {};

  firstUpdated() {
    this.#firstUpdate = true;
  }

  updated(changedProperties: Map<string, any>) {
    if (!this.#firstUpdate) for (const prop of changedProperties.keys()) {
      if (prop in this.$) this.$[prop].next((<any>this)[prop]);
    }
    this.#firstUpdate = false;
  }

  fireEvent<T>(name: string, eventInitDict?: CustomEventInit<T>) {
    this.dispatchEvent(new CustomEvent(name, eventInitDict));
    this.dispatchEvent(new CustomEvent(`${this.tagName.toLowerCase()}-${name}`, eventInitDict));
  }
}

export function applyMixins<T>(derivedCtor: Constructor<T>, baseCtors: Constructor<any>[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
  return derivedCtor;
}