import profileReducer, {addPost} from "../reducers/profileReducer";

let initialState = {
    profile: null,
    posts: [
        {id: 1, post: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda debitis."},
        {id: 2, post: "dicta ipsa odio quisquam ratione reiciendis repellendus suscipit"},
        {id: 3, post: "veniam! Animi aut beatae cum deleniti enim, hic molestiae officia rem vel."}
    ],
    status: '',
}
test('new post should be added, arr length must be 5', () => {
    //initial data
    const action = addPost("NewPost")
    //action
    const newState = profileReducer(initialState, action)
    //expectation
    expect(newState.posts.length).toBe(4)
})




