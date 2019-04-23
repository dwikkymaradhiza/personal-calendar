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
 *              subscriber_id:
 *                type: integer
 *              dichotomy_id:
 *                type: string
 *              group_id:
 *                type: string
 *            example:
 *              subscriber_id: 5006303
 *              dichotomy_id: 5b88ea6964989d3e39b8a6ed
 *              group_id: 5b890c29629d5c57791361ce
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
 *              subscriber_id:
 *                type: integer
 *              dichotomy_id:
 *                type: string
 *              group_id:
 *                type: string
 *            example:
 *              subscriber_id: 5006303
 *              dichotomy_id: 5b88ea6964989d3e39b8a6ed
 *              group_id: 5b890c29629d5c57791361ce
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 *
 * /auth/refresh:
 *   post:
 *     summary: Refresh Token
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
 *              subscriber_id:
 *                type: integer
 *              dichotomy_id:
 *                type: string
 *              group_id:
 *                type: string
 *            example:
 *              subscriber_id: 5006303
 *              dichotomy_id: 5b88ea6964989d3e39b8a6ed
 *              group_id: 5b890c29629d5c57791361ce
 *     responses:
 *       200:
 *         description: success
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal server error
 */
