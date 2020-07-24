<?php
    namespace App\Form;
    use Symfony\Component\Form\AbstractType;
    use Symfony\Component\Form\FormBuilderInterface;
    use Symfony\Component\Form\Extension\Core\Type\TextType;
    use Symfony\Component\Form\Extension\Core\Type\EmailType;
    use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
    use Symfony\Component\Form\Extension\Core\Type\PasswordType;
    use Symfony\Component\Form\Extension\Core\Type\IntegerType;
    use Symfony\Component\Form\Extension\Core\Type\NumberType;
    use Symfony\Component\Form\Extension\Core\Type\SubmitType;
    use Symfony\Component\Form\Extension\Core\Type\HiddenType;
    use Symfony\Bridge\Doctrine\Form\Type\EntityType;

    use App\Entity\Usuario;

    class UsuarioType extends AbstractType {
        public function buildForm(FormBuilderInterface $builder, array $options) {
            $builder
                ->add('user', TextType::class, array('empty_data' => '', 'label' => 'Nombre de Usuario'))
                ->add('email', EmailType::class, array('label' => 'Email'))
                ->add('pass', RepeatedType::class, array(
                    'type' => PasswordType::class,
                    'first_options' => array('label' => 'Contraseña'),
                    'second_options' => array('label' => 'Repite la contraseña')
                ))
                ->add('rol', HiddenType::class, array('empty_data' => 'ROLE_USER'))
                ->add('save', SubmitType::class, array('label' => 'Enviar'));
        }
    }
?>