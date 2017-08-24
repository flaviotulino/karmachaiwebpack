const AppComponent = {
    template:
        `
        <div>
            <h1>hello</h1>
            <a ui-sref="login">Login</a>
            <ui-view></ui-view>
        </div>
        `
};
export default AppComponent;