let CopyPassword_Timeout = false;

const GeneratePassword = () => {
    const len_Element = document.getElementById("Len-Amount-Input")
    const Input_Element = document.getElementById("Input-Generation")
    

    let Password = "";
    const RandomCharacters = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM_-.:?";
    const CharacterLength = RandomCharacters.length;
    let Password_Counter = 0;
    while (Password_Counter < Number(len_Element.value)) {
        Password += RandomCharacters.charAt(Math.floor(Math.random() * CharacterLength))
        Password_Counter += 1;
    };

    Input_Element.innerHTML = String(Password);
};

const CopyPassword = () => {
    if (CopyPassword_Timeout) {return};

    CopyPassword_Timeout = true;

    const CopyPassword_Element = document.getElementById("CopyPass")
    const Input_Element = document.getElementById("Input-Generation")
    window.navigator.clipboard.writeText(String(Element.innerHTML))
    CopyPassword_Element.innerHTML = "Copied To Clipboard";

    const SetTo_Default = () => {
        CopyPassword_Element.innerHTML = "Copy Password";
        CopyPassword_Timeout = false;
    };

    setTimeout(SetTo_Default, 1000);
};
