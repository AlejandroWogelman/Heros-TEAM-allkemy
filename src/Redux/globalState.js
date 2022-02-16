const ADD_STATE = "ADD_STATE";
const DELETE_CHARACTER = "DELETE_CHARACTER";
const ADD_CHARACTER = "ADD_CHARACTER";
const MODAL_ON = "MODAL_ON";
const MODAL_OFF = "MODAL_OFF";

const initialState = {
  characters: [],
  modal: false,
};

export default function stateGlobalRedux(state = initialState, action) {
  switch (action.type) {
    case ADD_STATE:
      if (initialState.characters.length === 0) {
        return { ...initialState, characters: action.payload };
      } else {
        return state;
      }

    case DELETE_CHARACTER:
      const filtrado = state.characters.filter(
        (character) => character.id !== action.payload
      );
      if (state.characters.length > 1) {
        localStorage.setItem("heros", JSON.stringify(filtrado));
        return { ...state, characters: filtrado };
      } else {
        return state;
      }

    case ADD_CHARACTER:
      const { characters } = state;
      const hero = action.payload;
      if (characters.find((el) => hero.id === el.id)) {
        return state;
      }
      const counter = { pos: 0, neg: 0 };
      characters.forEach((h) =>
        h.biography.alignment === "good"
          ? (counter.pos = counter.pos + 1)
          : (counter.neg = counter.neg + 1)
      );

      if (hero.biography.alignment === "good" && counter.pos < 3) {
        localStorage.setItem(
          "heros",
          JSON.stringify([...state.characters, action.payload])
        );
        return { characters: [...state.characters, action.payload] };
      } else if (hero.biography.alignment === "bad" && counter.neg < 3) {
        localStorage.setItem(
          "heros",
          JSON.stringify([...state.characters, action.payload])
        );
        return { characters: [...state.characters, action.payload] };
        //{characters: [arrays]}
      }
    case MODAL_OFF:
      return {
        ...state,
        modal: false,
      };
    case MODAL_ON:
      return {
        ...state,
        modal: true,
      };

    default:
      return state;
  }
}

export const AddState = (state) => async (dispatch) => {
  if (state.length >= 1) {
    dispatch({ type: ADD_STATE, payload: state });
  }
};

export const handleDelete = (character) => (dispatch) => {
  dispatch({ type: DELETE_CHARACTER, payload: character });
};

export const addCharacter = (hero) => (dispatch) => {
  dispatch({ type: ADD_CHARACTER, payload: hero });
};

export const modalON = () => (dispatch) => {
  dispatch({ type: MODAL_ON });
};
export const modalOFF = () => (dispatch) => {
  dispatch({ type: MODAL_OFF });
};
