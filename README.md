## [dom-event-phase](https://egas.tistory.com/99)

event phase에 대해 알 수 있습니다.

## React syntheticEvent bubbling

```javascript
export default function App() {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      // e.stopPropagation();
      console.log("[document] native dom event triggered");
    });
    const parentDiv = document.getElementById("parent");
    parentDiv.addEventListener("click", (e) => {
      // e.stopPropagation();
      console.log("[parent div] native dom event triggered");
    });
  }, []);
  const onParentClick = (e) => {
    // e.stopPropagation();
    console.log("[parent div] synthetic event triggered");
  };
  const onChildClick = (e) => {
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