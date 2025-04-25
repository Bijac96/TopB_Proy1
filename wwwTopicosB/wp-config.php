<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_topb' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1:3308' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '2Z i?.A~/cx[2B=g9ZE}nImF@i$t0_m=lv6QRCWYJ+81DQB(YH^X-{3TvL~/0/P,');
define('SECURE_AUTH_KEY',  'cAgMQcp)X+_,1hShY=7pp7SqJRuBAW:G,W |,,+EKj;Zhh|(P8MagoL;c_#4(3+7');
define('LOGGED_IN_KEY',    'gm>y5G%crtE &1iWXTbxn%Wr@<sc%*1A)fcY{BI p4^5s3|uEl:;+y+t)u,b#Llx');
define('NONCE_KEY',        'yHC|cdRV5+ &~E82J9Vp:e|)tF?P)=se7X`[7,8}LAaoZAS6K<?@%F??ts=a|Z%|');
define('AUTH_SALT',        'FL5ZRix:x[pavM47U_7e,i|Er2I|o{&W)bYKalkSoda.7-Bry/v8n^>I-R>AGO#v');
define('SECURE_AUTH_SALT', '.|KS9]?8l&%:(wmPJT:MN|A{<!~}O-G4<A@+z4+G`Ud4f28p#c(~|u6A,:HWfi!h');
define('LOGGED_IN_SALT',   'HO0<h.kXTsy:`921*OJ`k*BCb#B-RMees.=,j:C(PZL>~tm;54?fUe!uTk&U@UZ)');
define('NONCE_SALT',       'mC<m%+IkTbP@NW8C-{E,CW#JyC7d*,e%N::z#d*Cr9U1g8D2G{m?aHwuT*a-01S^');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
