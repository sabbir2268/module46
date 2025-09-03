// **
// **
// 1.e.target.[name of input field].value
// 2. use form action and formData in the action handler. formData.get('name of the input field)

// 3. controlled component , use state on change of the field . usefulll to dynamically handle error but its too lenghty as ned one state per field.

// handle all controlled field in one state object

// const [formData, setFormData] = useState ({
// name: ""
// password: ""
// phone: ""
// })

// 4.uncontrolled using useRef hook to get the value after submit
// 5. product management
