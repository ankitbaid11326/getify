import React, { Component } from 'react';
import { Text, View, Dimensions, FlatList } from 'react-native';
import { connect } from 'react-redux';

// Components
import Loading from '../Helper/loading';
import Repobox from './repobox';

// Actions
import { getRepos } from '../../store/actions/repos';

// Width and Height
const { width } = Dimensions.get('window');

class Repositories extends Component {
  state = {
    repos: this.props.repos
  };

  componentDidMount() {
    this.props.getRepos();
  }

  componentWillReceiveProps({ repos }) {
    if (repos.length) {
      this.setState({
        repos
      });
    }
  }

  render() {
    const { repos } = this.state;
    if (!repos.length) {
      return <Loading />;
    } else {
      return (
        <View
          style={{
            flex: 1
          }}
        >
          <FlatList
            data={repos}
            renderItem={({ item }) => (
              <Repobox
                url={item.url}
                description={item.description}
                stars={item.stargazers_count}
                language={item.language}
              />
            )}
          />
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    repos: state.repos.repos
  };
};

export default connect(
  mapStateToProps,
  { getRepos }
)(Repositories);
