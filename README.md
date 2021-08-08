## [dom-event-phase](https://egas.tistory.com/99)

event phase에 대해 알 수 있습니다.

## React syntheticEvent bubbling

```javascript
export default function App() {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      // @1
      // e.stopPropagation();
      console.log("[document] native dom event triggered");
    });
    const parentDiv = document.getElementById("parent");
    parentDiv.addEventListener("click", (e) => {
      // @2
      // e.stopPropagation();
      console.log("[parent div] native dom event triggered");
    });
  }, []);
  const onParentClick = (e) => {
    // @4
    // e.stopPropagation();
    console.log("[parent div] synthetic event triggered");
  };
  const onChildClick = (e) => {
    // @5
    // e.stopPropagation();
    console.log("[child button] synthetic event triggered");
  };

  return (
    <div id="parent" onClick={onParentClick}>
      <button onClick={onChildClick}>child</button>
    </div>
  );
}
```

<img src="https://user-images.githubusercontent.com/22424891/128633604-e1425c95-a3a5-41f6-af1d-0b9fba89e169.png" height="150px" />

```js
const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  // @3
  // e.stopPropagation();
  console.log("[btn] native dom event triggered");
});
```

btn도 추가하면 아래와 같이 된다.

<img src="https://user-images.githubusercontent.com/22424891/128633872-111ca20e-d7ce-4f04-aad2-87f3b3c2c9b6.png" height="150px" />

@ 순서에 따라 `e.stopPropagation();`를 활성화시켜보자.

- @1

```
[btn] native dom event triggered
[parent div] native dom event triggered
[child button] synthetic event triggered
[parent div] synthetic event triggered
[document] native dom event triggered
```

- @2

```
[btn] native dom event triggered
[parent div] native dom event triggered
```

- @3

```
[btn] native dom event triggered
```

- @4

```
[btn] native dom event triggered
[parent div] native dom event triggered
[child button] synthetic event triggered
[parent div] synthetic event triggered
```

- @5

```
[btn] native dom event triggered
[parent div] native dom event triggered
[child button] synthetic event triggered
```