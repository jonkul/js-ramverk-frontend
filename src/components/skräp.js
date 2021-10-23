/* test("Reset db and find expected elements", () => {
    sleep(200);
    const { getByTestId, getByDisplayValue } = render(<App />);
    sleep(200);
    screen.debug();
    
    it('should reset ok', async () => {
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
        
        //expect(getByTestId('myul')).toHaveTextContent("Dokument2");
        //expect(getByTestId('myul')).toHaveTextContent("Dokument3");
        // expect(getByTestId('myul')).toHaveTextContent("What is Lorem Ipsum?");
        expect(getByTestId.find('h3')).toHaveLength(1);
        
        act(() => {
        fireEvent.click(getByTestId('newbutton'));
        });
        
        await waitFor(() => {
            expect(getByTestId('myul')).toHaveTextContent("New document");
        });

        act(() => {
        fireEvent.click(getByTestId('Dokument1'));
        });

        await waitFor(() => {
            expect(getByDisplayValue('')).toHaveTextContent('Lorem');
            //expect(isElement('trix-editor'));
            //expect(getByTestId('trix-editor')).toHaveTextContent("What is Lorem Ipsum?");
        });
}); */









/* it("should change the button's text color", async () => {
  const text = "foobar";
  //fireEvent.press(queryByText(text));
  await waitFor(() => {
    const {debug, queryByText} = render(<App />);
    //expect(queryByText(text)).toHaveStyle({color: "green"});
  });
}); */











/* describe('Async Promise Test Suite', () => {

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
        // const linkElement3 = screen.getByText('Dokument1');
        expect(linkElement2).toBeInTheDocument();
        // expect(linkElement3).toBeInTheDocument();
        expect(wrapper.find('li')).toHaveLength(1);
    });

}); */




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







//const datadef = {data: [{_id: "123", name: 'Dokument1', html: 'Placeholder1'}, {_id: "234", name: 'Dokument2', html: 'Placeholder2'}, {_id: "345", name: 'Dokument3', html: 'Placeholder3'}]};
    /* const [liClicked, setLiClicked] = useState({
        _id: "",
        name: "",
        html: ""
    }); */

    //console.log({liClicked});
