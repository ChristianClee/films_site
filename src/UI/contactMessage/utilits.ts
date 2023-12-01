import type {MutateObj} from "./types"

export function action(wrappRef: MutateObj, popUpContacts: boolean) {
  const _wrappRef = wrappRef.current;
  if (_wrappRef && !popUpContacts) {
    console.log("sdfdfs");
    _wrappRef.style.transform = 'translateY(-30vh)';
    _wrappRef.style.opacity = "0";
    _wrappRef.style.display = "none";
  } else if (_wrappRef && popUpContacts) {
    _wrappRef.style.display = "";
    setTimeout(() => {
      _wrappRef.style.transform = 'translateY(0)';
      _wrappRef.style.opacity = "1";
    }, 30);
  }
}