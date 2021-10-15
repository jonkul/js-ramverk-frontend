import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import List from './components/list';
import { shallow, mount } from 'enzyme';
import renderer from "react-test-renderer";

const flushPromises = require('flush-promises');


test("Test 1", () => {
  const component = renderer.create(
    <App />
  );

  let tree = component.toJSON();
  /* expect(tree).toMatchSnapshot(); */
});


describe('Async Promise Test Suite', () => {

    it('A test involving flushPromises', async () => {
        const wrapper = mount(<List/>);
        await flushPromises();
        wrapper.update()
        expect(wrapper.find('h3')).toHaveLength(1);
    });

    let wrapper;

    it('Will not work correctly without flushing promises', async () => {
        let a;
        let b;

        Promise.resolve().then(() => {
            wrapper = mount(<App />);
        }).then(() => {
            b = 2;
        })

        await flushPromises();

        expect(wrapper.find('h3')).toHaveLength(1);
        expect(b).toBe(2);
        const linkElement2 = screen.getByText('');
        expect(linkElement2).toBeInTheDocument();

    });

});




/* describe('When rendering Parent', () => {
    var parent;

    beforeAll(() => {
        parent = mount(<App />)
    });

    it('should display Child with response of the service', () => {
        expect.assertions(1);

        return List().then( () => {
            expect(parent.find('h3')).toHaveLength(1);
        });
    });
});
 */




/* const flushPromises = () => new Promise(setImmediate);

let wrapper;

beforeEach(() => {
    wrapper = mount(<App />);
});

describe('<App /> rendering', () => {
    it('should render one <h1>', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('should render one <h3>', () => {
        expect(wrapper.find('h3')).toHaveLength(1);
    });

    it('should render one <h3>', async () => {
        const wrapperb = mount(<App />);
        await flushPromises();
        wrapperb.update();
        expect(wrapperb.find('h3')).toHaveLength(1);
    });

    it('should render one <img>', () => {
        expect(wrapper.find('img')).toHaveLength(1);
    });
}); */



/* 
  test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My little React/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the top controls', async () => {
  await render(<App />);
  const linkElement2 = screen.getByText('Loading...');
  expect(linkElement2).toBeInTheDocument();
});

test('renders the top controls, 2', async () => {
  await render(<App />);
  const linkElement2 = screen.getByText('Active');
  expect(linkElement2).toBeInTheDocument();
});
 */
