import FullList from "../model/FullList";

interface DomList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DomList {
  ul: HTMLUListElement;

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = "";
  }

  render(fullList: FullList): void {
    this.clear();

    fullList.list.forEach(item => {
      const li = document.createElement("li")as HTMLLIElement
      li.className = "item" 

      const check = document.createElement("input") as HTMLInputElement

      check.type = "checkbox"

      check.id = item.id

      check.checked = item.checked

      li.append(check)

      check.addEventListener('change', ()=>{
        item.checked = !item.checked
        
      })
    })
  }
}
