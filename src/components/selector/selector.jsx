import SwitchSelector from "react-switch-selector";

const Selector = () =>{
    const options = [
        {
            label: <span>Art</span>,
            value: {
                 foo: true
            },
            selectedBackgroundColor: "#0097e6",
        },
        {
            label: "Design",
            value: "bar",
            selectedBackgroundColor: "#fbc531"
        },
        {
            label: "Fashion",
            value: "bar",
            selectedBackgroundColor: "#fbc531"
        },
        {
            label: "Biomodels",
            value: "bar",
            selectedBackgroundColor: "#fbc531"
        }
     ];
     
     const onChange = (newValue) => {
         console.log(newValue);
     };
     
     const initialSelectedIndex = options.findIndex(({value}) => value === "bar");
     
     return (
         <div className="your-required-wrapper" style={{width: '100%', height: 30}}>
             <SwitchSelector
                 onChange={onChange}
                 options={options}
                 initialSelectedIndex={initialSelectedIndex}
                 backgroundColor={"#353b48"}
                 fontColor={"#f5f6fa"}
             />
         </div>
     );
}

export default Selector;