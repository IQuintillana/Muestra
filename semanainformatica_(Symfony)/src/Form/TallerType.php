<?php
    namespace App\Form;
    use Symfony\Component\Form\AbstractType;
    use Symfony\Component\Form\FormBuilderInterface;
    use Symfony\Component\Form\Extension\Core\Type\TextType;
    use Symfony\Component\Form\Extension\Core\Type\IntegerType;
    use Symfony\Component\Form\Extension\Core\Type\NumberType;
    use Symfony\Component\Form\Extension\Core\Type\SubmitType;
    use Symfony\Component\Form\Extension\Core\Type\HiddenType;
    use Symfony\Bridge\Doctrine\Form\Type\EntityType;

    use App\Entity\Categoriataller;

    class TallerType extends AbstractType {
        public function buildForm(FormBuilderInterface $builder, array $options) {
            $builder
                ->add('titulota', TextType::class, array('empty_data' => '', 'label' => 'Título'))
                ->add('categoriataller_id', EntityType::class, array(
                    'class' => Categoriataller::class,
                    'choice_label' => 'nombre', 'label' => 'Categoría'))
                ->add('liketa', NumberType::class, array('empty_data' => '0', 'label' => 'Likes'))
                ->add('save', SubmitType::class, array('label' => 'Enviar'));
        }
    }
?>