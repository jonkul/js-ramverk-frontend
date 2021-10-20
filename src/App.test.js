/* import { render, screen } from '@testing-library/react'; */
import React from 'react';
import App from './App';
import List from './components/list';
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import {
  fireEvent, 
  render,
  screen,
  cleanup,
  waitFor,
  act
} from "@testing-library/react";
import { ReactTrixRTEInput } from "react-trix-rte";
import NewButton from './components/newbutton';

const flushPromises = require('flush-promises');

//const { act } = renderer;

configure({ adapter: new Adapter() });

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

afterEach(cleanup);


it('Create new document and find it', async () => {
    const component = mount(
        <App
        />
    );

    console.log(component);

    await act(async () => {
        await Promise.resolve(component);
        await new Promise(resolve => setImmediate(resolve));
        component.update();
    });

    await act(async () => {
        console.log(component.debug());
    });

    /* await act(async () => {
        sleep(300);
    });

    await waitFor(() => {
        expect(component.find('li')).toHaveLength(3);
    });

    await act(async () => {
        console.log(component.debug());
    });

    act(() => {
        component.find('NewButton').simulate('click');
    });

    await act(async () => {
        await Promise.resolve(component);
        await new Promise(resolve => setImmediate(resolve));
        component.update();
    });

    await waitFor(() => {
        expect(component.find('li')).toHaveLength(4);
    }); */
});



//for producing snapshots
/* test("Expect tree to match snapshot", async () => {
    const component = renderer.create(
        <App />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
}); */
///////////


 //for producing snapshots
/* test("Manage to reset the db and then find the 3 default docs", async () => {
    const { getByTestId, getByDisplayValue } = render(<App />);

    act(() => {
        fireEvent.click(getByTestId('resetbutton'));
    });

    await waitFor(() => {
        expect(getByTestId('myul')).toHaveTextContent("Dokument1");
    });

    await waitFor(() => {
        expect(getByTestId('myul')).toHaveTextContent("Dokument2");
    });

    await waitFor(() => {
        expect(getByTestId('myul')).toHaveTextContent("Dokument3");
    });

    act(() => {
        fireEvent.click(getByTestId('resetbutton'));
    });
}); */
///////////



//for producing snapshots
/* test("Manage to create a new document and find it", async () => {
    const { getByTestId, getByDisplayValue } = render(<App />);

    act(() => {
        fireEvent.click(getByTestId('newbutton'));
    });

    await waitFor(() => {
        expect(getByTestId('myul')).toHaveTextContent("Dokument1");
    });

    await waitFor(() => {
        expect(getByTestId('myul')).toHaveTextContent("Dokument2");
    });

    await waitFor(() => {
        expect(getByTestId('myul')).toHaveTextContent("Dokument3");
    });

    await waitFor(() => {
        expect(getByTestId('myul')).toHaveTextContent("New document");
    });

    act(() => {
        fireEvent.click(getByTestId('resetbutton'));
    });
///////////
}); */
