import React from 'react';
import { render} from '@testing-library/react';
import Episodes from './Episodes';
import { episodeData } from './episodeData'


test('rendering components with no data yet', () => {
    render(<Episodes episodes={[]}/>);
})

test ('rerender the comp for testing after data load', () => {
    const {queryAllByTestId, rerender} = render(<Episodes episodes={[]}/>);
    
    const episodes = queryAllByTestId("episode")
    expect(episodes).toHaveLength(0);
   
    rerender (<Episodes episodes={episodeData._embedded.episodes} />);

   const episodesTwo = queryAllByTestId("episode")

    expect(episodesTwo).toHaveLength(6);
})
