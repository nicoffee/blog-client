import React from "react";
import { mount } from "enzyme";
import Post from "../../components/Post";

describe("Post", () => {
    it("always renders a div", () => {
        const mountedPost = mount(
            <Post title="title" body="body" />
        )
        const divs = mountedPost.find("div");
        expect(divs.length).toBeGreaterThan(0);
    });
});