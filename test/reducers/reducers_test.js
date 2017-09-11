import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from "../../src/actions/types";


describe('reducers', () => {
   describe('Comments reducer', () => {
       it('handles action with unknown type', () => {

           expect(commentReducer(undefined, {})).to.eql([]);
       });

       it('handles SAVE_COMMENT', () => {

           const action = { type: SAVE_COMMENT, payload: 'another great comment'};
           expect(commentReducer([], action)).to.eql(['another great comment']);

       });

   });
});
