/**
 * Import theme.
 * Being the first import is important, so that it is the default style
 * and other style can override it
 */

import cmf from '@talend/react-cmf';
import components from './components';
// import actionCreators from './actions';
// import expressions from './expressions';
// import reducer from './reducers';
// import * as sagas from './sagas';
import saga from './saga';
// import App from './components/App';

/**
 * Initialize CMF
 * This will:
 * - Register your components in the CMF registry
 * - Register your action creators in CMF registry
 * - Setup redux store using reducer
 * - Fetch the settings
 * - render react-dom in the dom 'app' element
 * API: https://github.com/Talend/ui/blob/master/packages/cmf/src/bootstrap.md
 */
cmf.bootstrap({
	// actionCreators,
	components,
	// expressions,
	// reducer,
	saga,
	// sagas,
	settingsURL: '/settings.json',
	RootComponent: components.App,
});
