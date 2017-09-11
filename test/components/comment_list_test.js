import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment List component', () => {
    let component;

    beforeEach(() => {
        let props = {comments: ['test comment', 'now i am work with Addo team!']};
        component = renderComponent(CommentList, null, props);
    });

    it('shows an <li> for each comment', () => {

        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {

        expect(component).to.contain('test comment');
        expect(component).to.contain('now i am work with Addo team!');
    });
});
