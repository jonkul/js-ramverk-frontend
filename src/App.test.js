import React from 'react';
import App from './App';
import {
  fireEvent,
  render,
  screen,
  act
} from "@testing-library/react";
import userEvent from '@testing-library/user-event';


describe('App', () => {
    test('renders App component, finds expected static elements', async () => {
        render(<App />);

        expect(screen.getByText('My little React/Trix text editor')).toBeInTheDocument();
        expect(screen.getByText('Active document:')).toBeInTheDocument();
        expect(screen.getByText('Documents:')).toBeInTheDocument();
        expect(await screen.findByText('Dokument1')).toBeInTheDocument();
    });



    test('renders App component, finds expected DB elements', async () => {
        render(<App />);

        expect(await screen.findByText('Dokument1')).toBeInTheDocument();
        screen.debug();
    });



    test('edits "active document input", finds state driven <p> in DOM', async () => {
        render(<App />);

        expect(screen.queryByText('test input')).toBeNull();

        await act(async () => {
            fireEvent.change(screen.getByRole('textbox'), {
                target: { value: 'test input' },
            });
        });

        expect(await screen.findByText('test input')).toBeInTheDocument();
    });



    test('edits the "text editor", finds state driven <p> in DOM', async () => {
        render(<App />);

        expect(screen.queryByText('test input2')).toBeNull();

        await act(async () => {
            fireEvent.change(screen.getByRole('textbox'), {
                target: { value: 'test input2' },
            });
        });

        expect(await screen.findByText('test input2')).toBeInTheDocument();
    });



    test('edits the "text editor", clicks save button', async () => {
        render(<App />);

        expect(screen.queryByText('test input3')).toBeNull();

        await act(async () => {
            fireEvent.change(screen.getByRole('textbox'), {
                target: { value: 'test input3' },
            });
        });

        expect(await screen.findByText('test input3')).toBeInTheDocument();

        await userEvent.click(screen.getByText('New'));
    });
});
