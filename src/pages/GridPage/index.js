import React from 'react';
import Grid from '../../components/Grid';
import Row from '../../components/Grid/Row';
import Column from '../../components/Grid/Column';
const GridPage = () => {
    return (
        <Grid>
            <Row>
                <Column colNum={12}>
                    <div>Content 1.1</div>
                </Column>
            </Row>
            <Row>
                <Column colNum={4}>
                    <div>Content 2.1</div>
                </Column>
                <Column colNum={4}>
                    <div>Content 2.2</div>
                </Column>
                <Column colNum={4}>
                    <div>Content 2.3</div>
                </Column>
            </Row>
            <Row>
                <Column colNum={3}>
                    <div>Content 3.1</div>
                </Column>
                <Column colNum={4}>
                    <div>Content 3.2</div>
                </Column>
                <Column colNum={4}>
                    <div>Content 3.3</div>
                </Column>
                <Column colNum={4}>
                    <div>Content 3.4</div>
                </Column>
            </Row>
        </Grid>
    );
}

export default GridPage;
