import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as contentful from 'contentful'

import Cardy from '../components/Card'

const SPACE_ID = 'fswkxs84o6a1'
const ACCESS_TOKEN = 'f70d164bf1b45e19fa5649409c117aec0d25da9be7a0c0ffb5b666f4dd8332a3'

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class CardList extends Component {

    state = {
        cards: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getCards()
    }

    getCards = () => {
        client.getEntries({
            content_type: 'card',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({cards: response.items})
            console.log(this.state.cards)
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }

    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCards()
    }

    render() {
        return (
            <div>
                { this.state.cards ? (
                    <div>
                        <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Activities"   
                            margin="normal"
                            onChange={this.onSearchInputChange}
                            />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.cards.map(currentCard => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Cardy card={currentCard} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No activities found" }
            </div>
        )
    }
}

export default CardList;