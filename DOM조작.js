//////////// Node >> 노드 (Element 상위 요소) // Element >> 요소
const parentElement = document.querySelector(".parent");
const childElement = document.querySelector(".child");
const childElements = document.querySelectorAll(".child");

//////////// Element.closest()
// 자신을 포함한 조상 요소 중 "CSS 선택자"와 일치하는 가장 가까운 요소 반환 (없으면 null)
console.log(childElement.closest(".parent"));
console.log(childElement.closest("div"));

//////////// Node.previousSibling / Node.nextSibling
// 노드의 이전 형제를 반환 / 노드의 다음 형제를 반환 (없으면 null)
console.log(childElement.previousSibling); // 주석
console.log(childElement.nextSibling); // 텍스트1

//////////// Element.previousElementSibling / Element.nextElementSibling
// 요소의 이전 형제를 반환 / 노드의 다음 형제를 반환 (없으면 null)
console.log(childElement.previousElementSibling); // null
console.log(childElement.nextElementSibling); // child (2번째)

//////////// Element.children
// 요소의 모든 자식 요소를 유사배열로 반환 (없으면 null)
console.log(parentElement.children); // child (1번째), child (2번째)

//////////// Element.firstElementChild / Element.lastElementChild
// 요소의 첫 번째 자식 요소 / 요소의 마지막 자식 요소 반환
console.log(parentElement.firstElementChild); // child (1번째)
console.log(parentElement.lastElementChild); // child (2번째)

//////////// Element.prepend() / Element.append()
// 요소의 첫 번째 자식으로 요소 삽입 / 요소의 마지막 자식으로 요소 삽입

//////////// Element.remove()
// 요소를 제거

//////////// Element.insertAdjacentElement()
// 대상 요소의 지정한 위치에 새로운 요소를 삽입

// 아래 VSCode에서 Comment tagged templates 확장자를 설치하면 코드에 색 입힘
/*html*/ `
<!-- beforebegin (이전 형제) -->
<div class="target">
    <!-- afterbegin (첫 번째 자식) -->
    Content!
    <!-- beforeend (마지막 자식)-->
</div>
<!-- afterend (다음 형제) -->`

let childElement3 = document.createElement("div");
childElement3.classList.add("child3");
childElements[1].insertAdjacentElement("beforebegin", childElement3);

//////////// Node.insertBefore()
// 부모 노드의 자식이 참조 노드의 이전 형제로 노드를 삽입 (위 예제에서 참조 노드로 'Content!'를 선택했다면 이전 형제로 삽입함)

//////////// Node.contains()
// 매개변수 노드가 노드의 자신을 포함한 후손인지 확인
console.log(parentElement.contains(parentElement)); // true
console.log(parentElement.contains(childElement)); // true
console.log(parentElement.contains(document.body)); // false

//////////// Node.textContent
// 노드의 모든 텍스트를 반환 (변경 가능)

//////////// Element.innerHTML
// 요소 내부의 HTML을 반환 (변경 가능)

//////////// Element.dataset
// 요소의 각 'data-' 속성 값을 반환 (변경 가능)

//////////// Element.tagName
// 요소의 태그 이름을 반환

//////////// Element.id / Element.className / Element.classList
// 요소의 id 반환 / 요소의 class 반환 / 요소의 class 속성값 제어 (아래 매소드 확인)

// classList 매소드
// .add(): 매개변수 값을 새로운 값 추가
// .remove(): 매개변수 값을 제거
// .toggle(): 매개변수 값을 토글 (있으면 제거, 없으면 추가)
// .contains(): 매개변수 값이 있는지 확인 (boolean)

//////////// Element.style
// 요소의 CSS 속성 값을 반환 (.css 확장자를 통해 지정된 속성은 못가져오고 인라인에 지정된 속성만 가져올 수 있음)

//////////// window.getComputedStyle()
// 매개변수 요소에 적용된 스타일 객체를 반환 (.css 확장자를 통해 지정된 속성까지 가져옴)

//////////// Element.getAttribute('var') / Element.setAttribute('var', 'val')
// 요소의 속성 중 'var'의 값을 반환 / 요소에 'val'값을 가진 'var'이름의 속성을 추가

//////////// Element.hasAttribute('var') / Element.removeAttribute('var')
// 요소에 'var' 속성이 있는지 반환 / 요소에 'var' 속성을 제거