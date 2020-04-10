import jobReducer from "./jobReducer";
import * as actions from "../actions/jobActions";

it("should add job when passed CREATE_JOB_SUCCESS", () => {
      // arrange
    const initialState = [
        {
        title: "A"
        },
        {
        title: "B"
        }
    ];

    const newJob = {
        title: "C"
    };
    const action = actions.createJobSuccess(newJob);

    // act
    const newState = jobReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual("A");
    expect(newState[1].title).toEqual("B");
    expect(newState[2].title).toEqual("C");
});

it("should update job when passed UPDATE_JOB_SUCCESS", () => {
      // arrange
    const initialState = [
        { id: 1, title: "X" },
        { id: 2, title: "Y" },
        { id: 3, title: "Z" }
    ];

    const job = { id: 3, title: "New Title" };
    const action = actions.updateJobSuccess(job);

    // act
    const newState = jobReducer(initialState, action);
    const updatedJob = newState.find(a => a.id === job.id);
    const untouchedJob = newState.find(a => a.id === 1);

    // assert
    expect(updatedJob.title).toEqual("New Title");
    expect(untouchedJob.title).toEqual("X");
    expect(newState.length).toEqual(3);
});