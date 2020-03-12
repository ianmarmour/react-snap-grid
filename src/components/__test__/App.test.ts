import React from "react";
import { renderHook, act } from '@testing-library/react-hooks'

import App from "../App";

test("Should Render", async () => {
    const { result } = renderHook(() => App())
})