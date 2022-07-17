import { Button, Input } from 'semantic-ui-react';
import { useForm, ValidationError } from '@formspree/react';
export default function Contact() {
    const [state, handleSubmit] = useForm("xeqnyqpa");
    if (state.succeeded) {
        return (
            <article className="article br3 ba b--black-10 w-100 w-50-m w-50-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <div className='legend center'>
                                <legend className="f2 fw6 ph0 mh0">Thanks for reaching out!</legend>
                            </div>
                        </fieldset>
                    </div>
                </main>
            </article>
        );
    };
    return (
        <article className="article br3 ba b--black-10 w-100 w-50-m w-50-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <form onSubmit={handleSubmit}>
                            <div className='legend center'>
                                <legend className="f2 fw6 ph0 mh0">contact</legend>
                            </div>
                            <div className="ui form mt4">
                                <div className="fields">
                                    <div className="field mrigt">
                                        <label>first name</label>
                                        <Input name='firstname' type="text" id='firstname' />
                                    </div>
                                <div className="field">
                                    <label>last name</label>
                                    <Input name='lastname' type="text" id='lastname' />
                                </div>
                            </div>
                            </div>
                            <div className="ui form">
                                <div className="fields">
                                    <div className="sixteen wide field">
                                        <label>email</label>
                                        <Input name="email" type="email" id='email' />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </div>
                                </div>
                            </div>
                            <div className="ui form">
                                <div className="fields">
                                    <div className="sixteen wide field">
                                        <label>message</label>
                                        <textarea id='message' name='message'></textarea>
                                    </div>
                                </div>
                            </div>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                            <div className="mt3">
                                <Button type="submit" content='send' disabled={state.submitting} primary />
                            </div>
                            <div className='buton mt3'>
                                <h2></h2>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </main>
        </article>
    );
};