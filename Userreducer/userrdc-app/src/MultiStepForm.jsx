import { useReducer } from "react";

const initialState = {
  step: 1,
  isSubmitted: false,
  formData: {
    name: "",
    email: "",
    username: "",
    password: ""
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value
        }
      };

    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };

    case "PREVIOUS_STEP":
      return { ...state, step: state.step - 1 };

    case "SUBMIT_FORM":
      return { ...state, isSubmitted: true };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.isSubmitted) {
    return (
      <div>
        <h3>Form Submitted Successfully</h3>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset Form
        </button>
      </div>
    );
  }

  return (
    <div>
      {state.step === 1 && (
        <div>
          <h3>Step 1: Personal Details</h3>
          <input
            placeholder="Name"
            value={state.formData.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value
              })
            }
          />
          <br />
          <input
            placeholder="Email"
            value={state.formData.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value
              })
            }
          />
          <br />
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </div>
      )}

      {state.step === 2 && (
        <div>
          <h3>Step 2: Account Details</h3>
          <input
            placeholder="Username"
            value={state.formData.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "username",
                value: e.target.value
              })
            }
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={state.formData.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "password",
                value: e.target.value
              })
            }
          />
          <br />
          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </div>
      )}

      {state.step === 3 && (
        <div>
          <h3>Step 3: Review & Submit</h3>
          <p>Name: {state.formData.name}</p>
          <p>Email: {state.formData.email}</p>
          <p>Username: {state.formData.username}</p>
          <p>Password: {state.formData.password}</p>

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
          <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default MultiStepForm;
