import {useDispatch,} from "react-redux";
import {updateBoxValue} from "../../features/boxProperties.js";

export default function BoxRange({inputData}) {
    const dispatch = useDispatch();

    function handleInputs(e) {
        dispatch(updateBoxValue({
            inputNumber: inputData.inputNumber,
            value: e.target.value
        }))
    }

    return (
        <div className="my-8">
            <div className="flex justify-between items-center">
                <p>{inputData.name}</p>
                <div className="flex items-center mb-2">
                    <input
                        value={inputData.value}
                        onChange={handleInputs}
                        className="w-14 h-7 mr-2 border border-gray-200 text-center"
                        type="number"/>
                    <p>px</p>
                </div>
            </div>
            <div className="relative z-0 w-full flex items-center">
                <input
                    min={inputData.minMax[0]}
                    max={inputData.minMax[1]}
                    value={inputData.value}
                    onChange={handleInputs}
                    className="w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    type="range"/>
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0.5 h-5
                    bg-gray-300 rounded"></div>
            </div>
        </div>
    )
}