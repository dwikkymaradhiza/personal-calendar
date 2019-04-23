/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Sign In
 *     tags:
 *      - Auth
 *     produces:
 *        application/json
 *     parameters:
 *        - in: body
 *          name: body
 *          description: Parameter that needs to be added to the api
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *            example:
 *              username: rizkydestrio
 *              password: admin123
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 *
 * /auth/register:
 *   post:
 *     summary: Sign Up
 *     tags:
 *      - Auth
 *     produces:
 *        application/json
 *     parameters:
 *        - in: body
 *          name: body
 *          description: Parameter that needs to be added to the api
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              email:
 *                type: string
 *              first_name:
 *                type: string
 *              last_name:
 *                type: string
 *            example:
 *              username: dwikkymaradhiza
 *              password: admin123
 *              email: dwikkymaradhiza@gmail.com
 *              first_name: Dwikky
 *              last_name: Maradhiza
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 */
