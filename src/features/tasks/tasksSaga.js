import reduxSaga from "redux-saga";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects"
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(500);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks))
    }
    catch (error) {
        yield call(alert, "Błąd pobierania, spróbuj ponownie lub sprawdź połączenie z internetem")
    }
}
function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}